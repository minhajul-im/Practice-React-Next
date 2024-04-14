import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main>
      <h1>Hello Next App</h1>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              expedita veniam molestias impedit quae dignissimos, nulla repellat
              ea in hic? Quas porro cupiditate commodi molestias eius dolores
              possimus doloribus tempore quae, perferendis facilis eveniet
              repellat aspernatur, praesentium sed fugiat officia vero maxime
              adipisci fuga? Nulla nobis fugiat deleniti! Repellat incidunt
              maiores magni libero fuga sequi! Recusandae necessitatibus
              corrupti libero culpa ea itaque, fugiat maxime. Unde harum
              dignissimos similique qui, aspernatur porro autem pariatur? Vitae
              iure beatae ipsam officiis deserunt quod sunt ad provident sed
              ipsum. Reprehenderit, harum aut itaque sunt praesentium
              consectetur neque accusamus perferendis sequi quibusdam, assumenda
              placeat esse.
            </p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
